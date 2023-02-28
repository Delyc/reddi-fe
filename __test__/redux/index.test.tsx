import SubRedditSlice, {setSubRedditContent, setSubRedditType, SubReddit} from "redux/reducers/SubRedditSlice";

describe('SubRedditSlice reducer', () => {
  it('should handle initial state', () => {
    expect(SubRedditSlice(undefined, { type: 'unknown' })).toEqual({
      subRedditType: '',
      subRedditContent: '',
    });
  });

  it('should handle setSubRedditType', () => {
    const newState = SubRedditSlice({ subRedditType: '', subRedditContent: '' }, setSubRedditType('r/reactjs'));
    expect(newState.subRedditType).toEqual('r/reactjs');
    expect(newState.subRedditContent).toEqual('');
  });

  it('should handle setSubRedditContent', () => {
    const newState = SubRedditSlice({ subRedditType: '', subRedditContent: '' }, setSubRedditContent('ReactJS is awesome!'));
    expect(newState.subRedditType).toEqual('');
    expect(newState.subRedditContent).toEqual('ReactJS is awesome!');
  });

  it('should handle SubReddit', () => {
    const newState = SubRedditSlice({ subRedditType: '', subRedditContent: '' }, SubReddit({ type: 'r/reactjs', content: 'ReactJS is awesome!' }));
    expect(newState.subRedditType).toEqual('r/reactjs');
    expect(newState.subRedditContent).toEqual('ReactJS is awesome!');
  });
});
