// import { counterReducer } from "../counter/state/counter.reducer";
// import { CounterState } from "../counter/state/counter.state";
// import { postsReducer } from "../posts/state/posts.reducer";
// import { PostsState } from "../posts/state/posts.state";

// export interface AppState {
//     counter: CounterState,
//     posts: PostsState
// }

// export const appReducer = {
//     counter: counterReducer,
//     posts: postsReducer
// };

import { SharedState } from './Shared/shared.state';
import { SHARED_STATE_NAME } from './Shared/shared.selector';
import { SharedReducer } from './Shared/shared.reducer';

export interface AppState {
  [SHARED_STATE_NAME]: SharedState;
}

export const appReducer = {
  [SHARED_STATE_NAME]: SharedReducer,
};