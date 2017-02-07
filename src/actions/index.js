export function selectWebsite(website) {
  // SelectWebsite is an action creator, it needs to return an action.
  // An object with a type property.
  return {
    type: 'WEBSITE_SELECTED',
    payload: website
  };
}
