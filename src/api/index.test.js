import '../../setupJest'; // TODO: find out why it isn't get picked up from npm config
import { fetchServiceUpdates } from '../api';

describe('api::fetchServiceUpdates', () => {
  const mockData = { test: 'test' };
  let setTimeout;

  beforeEach(() => {
    setTimeout = global.setTimeout;
    global.setTimeout = fn => fn();
  });

  afterEach(() => {
    global.setTimeout = setTimeout;
  });

  it('should call fetch and return json', () => {
    fetch.mockResponse(JSON.stringify(mockData));

    return fetchServiceUpdates().then(data => {
      expect(data).toBeDefined();
      expect(data).toEqual(mockData);
    });
  });
});
