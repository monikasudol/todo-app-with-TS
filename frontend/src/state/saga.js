import listsSaga from './saga/lists';
import tasksSaga from './saga/tasks';

export const APP_INIT = '@@INIT';

export default function*() {
  yield* listsSaga();
  yield* tasksSaga();
}
