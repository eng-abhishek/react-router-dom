import react,{Suspense,lazy} from "react";
// import Comp1 from "./Comp1";
// import Comp2 from "./Comp2";
const Comp1 = lazy(()=>import('./Comp1'));
const Comp2 = lazy(()=>import('./Comp2'));


function LazyLoading() {
  return (
    <>
    <Suspense fallback={<div></div>}>
      <h2>Lazy Loading Example</h2>
      <Comp1 />
    <Suspense fallback={<div>Loading.....</div>}>
      <Comp2/>
    </Suspense>
    </Suspense>
    </>
  );
}
export default LazyLoading;
