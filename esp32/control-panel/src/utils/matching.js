/**
 * Calculates a match score between two listings.
 * @param {Object} userListing - The active user's listing (usually the user's need or offer context)
 * @param {Object} peerListing - The listing being compared against
 * @returns {Object} { score: number, reason: string }
 */
export function calculateMatchScore(userListing, peerListing) {
  // If the listing belongs to the same user or student, no match
  if (userListing.id === peerListing.id || userListing.studentName === peerListing.studentName) {
    return { score: 0, reason: "Same listing or user" };
  }

  const offerUser = (userListing.offer || '').toLowerCase().trim();
  const needUser = (userListing.lookingFor || '').toLowerCase().trim();
  const catUser = (userListing.category || '').toLowerCase().trim();

  const offerPeer = (peerListing.offer || '').toLowerCase().trim();
  const needPeer = (peerListing.lookingFor || '').toLowerCase().trim();
  const catPeer = (peerListing.category || '').toLowerCase().trim();

  // Keyword tokenization & cleanup
  const getTokens = (str) => {
    return str
      .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "")
      .split(/\s+/)
      .filter(w => w.length > 2)
      .map(w => w.toLowerCase());
  };

  const tokensOfferUser = getTokens(offerUser);
  const tokensNeedUser = getTokens(needUser);
  const tokensOfferPeer = getTokens(offerPeer);
  const tokensNeedPeer = getTokens(needPeer);

  // Helper to compute intersection similarity
  const getSimilarity = (tokens1, tokens2) => {
    if (tokens1.length === 0 || tokens2.length === 0) return 0;
    
    // Check direct word containment (case insensitive)
    let matches = 0;
    tokens1.forEach(t1 => {
      // Direct match or partial match
      if (tokens2.some(t2 => t2.includes(t1) || t1.includes(t2))) {
        matches++;
      }
    });

    return matches / Math.max(tokens1.length, tokens2.length);
  };

  // 1. Peer offers what User needs
  const peerSatisfiesUser = getSimilarity(tokensOfferPeer, tokensNeedUser);
  
  // 2. User offers what Peer needs
  const userSatisfiesPeer = getSimilarity(tokensOfferUser, tokensNeedPeer);

  // 3. Category similarity
  const categoryMatch = catUser === catPeer;

  let score = 0;
  let reason = "";

  // Compute match score and explanation
  if (peerSatisfiesUser > 0.1 && userSatisfiesPeer > 0.1) {
    // True double-ended exchange (Mutual Match)
    score = Math.round(88 + Math.min(peerSatisfiesUser, userSatisfiesPeer) * 10);
    score = Math.min(98, score); // cap at 98%
    reason = `Excellent mutual match! ${peerListing.studentName} offers "${peerListing.offer}" which matches your need for "${userListing.lookingFor}", and they are looking for "${peerListing.lookingFor}" which matches your offer of "${userListing.offer}".`;
  } else if (peerSatisfiesUser > 0.1) {
    // One-sided: Peer has what User needs, but Peer's need doesn't match User's offer
    score = Math.round(70 + peerSatisfiesUser * 15);
    if (categoryMatch) score += 3;
    score = Math.min(85, score);
    reason = `Strong match! ${peerListing.studentName} offers "${peerListing.offer}" which matches your need for "${userListing.lookingFor}". They are looking for "${peerListing.lookingFor}".`;
  } else if (userSatisfiesPeer > 0.1) {
    // One-sided: User has what Peer needs, but User's need doesn't match Peer's offer
    score = Math.round(65 + userSatisfiesPeer * 15);
    if (categoryMatch) score += 3;
    score = Math.min(78, score);
    reason = `${peerListing.studentName} is looking for "${peerListing.lookingFor}" which matches your offer of "${userListing.offer}". They offer "${peerListing.offer}" in exchange.`;
  } else if (categoryMatch) {
    // Only Category matches
    score = 45;
    reason = `Category match! Both of you are posting in the "${peerListing.category}" category, indicating a potential swap of interest.`;
  } else {
    // Default low match
    score = Math.round(20 + Math.random() * 15);
    reason = `Alternative community recommendation: Check out what ${peerListing.studentName} is offering!`;
  }

  return { score, reason };
}

/**
 * Searches the list of all listings to find the top matches for a given listing.
 * @param {Object} currentListing - The listing to match against
 * @param {Array} allListings - List of all active listings
 * @returns {Array} List of matched listings with an added `match` object { score, reason }
 */
export function getTopMatches(currentListing, allListings) {
  return allListings
    .filter(l => l.id !== currentListing.id && l.studentName !== currentListing.studentName)
    .map(l => {
      const matchResult = calculateMatchScore(currentListing, l);
      return {
        ...l,
        match: matchResult
      };
    })
    .filter(l => l.match.score > 0)
    .sort((a, b) => b.match.score - a.match.score)
    .slice(0, 3); // top 3 recommendations
}
