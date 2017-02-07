// State argument is not application state... It is only the
// state this reducer is responsible for
export default function(state = null, action) {
  switch(action.type) {
  case 'WEBSITE_SELECTED':
    return action.payload;
  }
  return state;
}
