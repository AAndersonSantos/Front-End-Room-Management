const proxy = [
    {
      context: '/api',
      target: 'https://systemroommanagement.herokuapp.com/api/rooms',
      pathRewrite: {'^/api' : ''}
    }
  ];
  module.exports = proxy;