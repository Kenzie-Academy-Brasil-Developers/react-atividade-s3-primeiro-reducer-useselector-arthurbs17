import Banana from "../../../assets/Banana.png";
import Maçã from "../../../assets/Maçã.png";
import Morango from "../../../assets/Morango.png";

const initialState = [
  { name: "Banana", image: Banana },
  { name: "Maçã", image: Maçã },
  { name: "Morango", image: Morango },
];

const fruitsReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default fruitsReducer;
