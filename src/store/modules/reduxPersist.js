// eslint-disable-next-line import/no-extraneous-dependencies
import storage from 'redux-persist/lib/storage';
// eslint-disable-next-line import/no-extraneous-dependencies
import { persistReducer } from 'redux-persist';

export default (reducers) => {
  const persistedReducer = persistReducer(
    {
      key: 'COMSUMO-API',
      storage,
      whitelist: ['auth'],
    },
    reducers
  );

  return persistedReducer;
};
