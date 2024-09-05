import { useDispatch, useSelector } from 'react-redux';
import createDynamicSlice from './createDynamicSlice';
import { createAsyncThunk } from '@reduxjs/toolkit';
import store from 'store/store';

const useDynamicSlice = (sliceName, apiCalls, initialState = {}) => {
  const dispatch = useDispatch();
  const sliceKey = `slice_${sliceName}`;
  const sliceState = useSelector((state) => state[sliceKey]);

  if (!sliceState) {
    const asyncActionsMap = Object.keys(apiCalls).reduce((map, key) => {
      map[key] = createAsyncThunk(`${sliceName}/${key}`, apiCalls[key]);
      return map;
    }, {});

    const slice = createDynamicSlice(
      sliceName,
      {
        loading: false,
        data: null,
        error: null,
        ...initialState,
      },
      {},
      asyncActionsMap,
    );

    // Inject the reducer into the store dynamically
    store.reducerManager.add(sliceName, slice.reducer);

    dispatch(store.actions[sliceName]);
  }

  const actions = Object.keys(apiCalls).reduce((acc, key) => {
    acc[key] = (args) => dispatch(slice.actions[key](args));
    return acc;
  }, {});

  return {
    ...sliceState,
    ...actions,
  };
};

export default useDynamicSlice;
