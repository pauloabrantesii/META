import { Dimensions, PixelRatio } from 'react-native';

const { width, height } = Dimensions.get('window'); // get current width
const SCALE = 375; // constant, 375 is standard width of  iphone 6 / 7 / 8

const widthPercentageToDP = (widthPercent) => {
  const elemWidth = parseFloat(widthPercent); // Convert string input to decimal number
  return PixelRatio.roundToNearestPixel((width * elemWidth) / 100);
};

const heightPercentageToDP = (heightPercent) => {
  const elemHeight = parseFloat(heightPercent); // Convert string input to decimal number\
  return PixelRatio.roundToNearestPixel((height * elemHeight) / 100);
};

const scaleSize = (fontSize) => {
  const ratio = fontSize / SCALE; // get ratio based on your standard scale
  return Math.round(ratio * width);
};

export const scaleFont = (size) => size * 1;

export { heightPercentageToDP, scaleSize, widthPercentageToDP };
