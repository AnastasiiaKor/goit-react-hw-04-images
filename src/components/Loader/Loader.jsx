import { Oval } from 'react-loader-spinner';
import css from '../Loader/Loader.module.css';
function Loader() {
  return (
    <div className={css.Wrapper}>
      <Oval
        height={300}
        width={300}
        color="#3f51b5"
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="#404d94"
      />
    </div>
  );
}
export default Loader;
