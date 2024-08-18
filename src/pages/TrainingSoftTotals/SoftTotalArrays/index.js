import SoftThirteenArray from './SoftThirteenArray';
import SoftForteenArray from './SoftForteenArray';
import SoftFifteenArray from './SoftFifteenArray';
import SoftTwentyArray from './SoftTwentyArray';

const FullSoftTrainingArray = SoftThirteenArray.concat(SoftTwentyArray, SoftForteenArray, SoftFifteenArray);


console.log(FullSoftTrainingArray);

export default FullSoftTrainingArray;
