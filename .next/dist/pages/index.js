'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('C:\\playgrounds\\BarclaysPremierLeague\\node_modules\\babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('C:\\playgrounds\\BarclaysPremierLeague\\node_modules\\babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _stringify = require('C:\\playgrounds\\BarclaysPremierLeague\\node_modules\\babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _getPrototypeOf = require('C:\\playgrounds\\BarclaysPremierLeague\\node_modules\\babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('C:\\playgrounds\\BarclaysPremierLeague\\node_modules\\babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('C:\\playgrounds\\BarclaysPremierLeague\\node_modules\\babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('C:\\playgrounds\\BarclaysPremierLeague\\node_modules\\babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('C:\\playgrounds\\BarclaysPremierLeague\\node_modules\\babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('C:\\playgrounds\\BarclaysPremierLeague\\node_modules\\next\\node_modules\\react\\react.js');

var _react2 = _interopRequireDefault(_react);

var _head = require('C:\\playgrounds\\BarclaysPremierLeague\\node_modules\\next\\dist\\lib\\head.js');

var _head2 = _interopRequireDefault(_head);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _link = require('C:\\playgrounds\\BarclaysPremierLeague\\node_modules\\next\\dist\\lib\\link.js');

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _class = function (_React$Component) {
  (0, _inherits3.default)(_class, _React$Component);

  function _class() {
    (0, _classCallCheck3.default)(this, _class);
    return (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).apply(this, arguments));
  }

  (0, _createClass3.default)(_class, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (!sessionStorage.getItem('bpl')) sessionStorage.setItem('bpl', (0, _stringify2.default)(this.props.data));
    }
  }, {
    key: 'render',
    value: function render() {
      var logoStyle = {
        width: '30px'
      };
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _head2.default,
          null,
          _react2.default.createElement(
            'title',
            null,
            'League Table'
          ),
          _react2.default.createElement('meta', { name: 'viewport', content: 'initial-scale=1.0 width=device-width' }),
          _react2.default.createElement('link', { rel: 'stylesheet', href: 'https://unpkg.com/purecss@0.6.1/build/pure-min.css' })
        ),
        _react2.default.createElement(
          'div',
          { className: 'pure-g' },
          _react2.default.createElement('div', { className: 'pure-u-1-3' }),
          _react2.default.createElement(
            'div',
            { className: 'pure-u-1-3' },
            _react2.default.createElement(
              'h1',
              null,
              ' Barclays Premier League'
            ),
            _react2.default.createElement(
              'table',
              { className: 'pure-table' },
              _react2.default.createElement(
                'thead',
                null,
                _react2.default.createElement(
                  'tr',
                  null,
                  _react2.default.createElement(
                    'th',
                    null,
                    'Position'
                  ),
                  _react2.default.createElement(
                    'th',
                    null,
                    'Team'
                  ),
                  _react2.default.createElement(
                    'th',
                    null,
                    'Points'
                  ),
                  _react2.default.createElement(
                    'th',
                    null,
                    'Goals'
                  ),
                  _react2.default.createElement(
                    'th',
                    null,
                    'Wins'
                  ),
                  _react2.default.createElement(
                    'th',
                    null,
                    'Draws'
                  ),
                  _react2.default.createElement(
                    'th',
                    null,
                    'Lost'
                  ),
                  _react2.default.createElement('th', null)
                )
              ),
              _react2.default.createElement(
                'tbody',
                null,
                this.props.data.standing.map(function (standing, i) {
                  var oddOrNot = i % 2 == 1 ? "pure-table-odd" : "";
                  return _react2.default.createElement(
                    'tr',
                    { key: i, className: oddOrNot },
                    _react2.default.createElement(
                      'td',
                      null,
                      standing.position
                    ),
                    _react2.default.createElement(
                      'td',
                      null,
                      _react2.default.createElement('img', { className: 'pure-img logo', src: standing.crestURI })
                    ),
                    _react2.default.createElement(
                      'td',
                      null,
                      standing.points
                    ),
                    _react2.default.createElement(
                      'td',
                      null,
                      standing.goals
                    ),
                    _react2.default.createElement(
                      'td',
                      null,
                      standing.wins
                    ),
                    _react2.default.createElement(
                      'td',
                      null,
                      standing.draws
                    ),
                    _react2.default.createElement(
                      'td',
                      null,
                      standing.losses
                    ),
                    _react2.default.createElement(
                      'td',
                      null,
                      _react2.default.createElement(
                        _link2.default,
                        { href: '/details?id=' + standing.position },
                        'More'
                      )
                    )
                  );
                })
              )
            )
          ),
          _react2.default.createElement('div', { className: 'pure-u-1-3' })
        )
      );
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
        var res;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (process.browser) {
                  _context.next = 7;
                  break;
                }

                _context.next = 3;
                return _axios2.default.get('http://api.football-data.org/v1/competitions/426/leagueTable');

              case 3:
                res = _context.sent;
                return _context.abrupt('return', { data: res.data });

              case 7:
                return _context.abrupt('return', { data: JSON.parse(sessionStorage.getItem('bpl')) });

              case 8:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps() {
        return _ref.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);
  return _class;
}(_react2.default.Component);

exports.default = _class;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxwbGF5Z3JvdW5kc1xcQmFyY2xheXNQcmVtaWVyTGVhZ3VlXFxwYWdlc1xcaW5kZXguanMiXSwibmFtZXMiOlsic2Vzc2lvblN0b3JhZ2UiLCJnZXRJdGVtIiwic2V0SXRlbSIsInByb3BzIiwiZGF0YSIsImxvZ29TdHlsZSIsIndpZHRoIiwic3RhbmRpbmciLCJtYXAiLCJpIiwib2RkT3JOb3QiLCJwb3NpdGlvbiIsImNyZXN0VVJJIiwicG9pbnRzIiwiZ29hbHMiLCJ3aW5zIiwiZHJhd3MiLCJsb3NzZXMiLCJwcm9jZXNzIiwiYnJvd3NlciIsImdldCIsInJlcyIsIkpTT04iLCJwYXJzZSIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozt3Q0FjdUI7QUFDbkIsVUFBRyxDQUFDQSxlQUFlQyxPQUFmLENBQXVCLEtBQXZCLENBQUosRUFBbUNELGVBQWVFLE9BQWYsQ0FBdUIsS0FBdkIsRUFBOEIseUJBQWUsS0FBS0MsS0FBTCxDQUFXQyxJQUExQixDQUE5QjtBQUNwQzs7OzZCQUVPO0FBQ04sVUFBTUMsWUFBWTtBQUNoQkMsZUFBTztBQURTLE9BQWxCO0FBR0EsYUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFFRSxrREFBTSxNQUFLLFVBQVgsRUFBc0IsU0FBUSxzQ0FBOUIsR0FGRjtBQUdFLGtEQUFNLEtBQUksWUFBVixFQUF1QixNQUFLLG9EQUE1QjtBQUhGLFNBREY7QUFNRTtBQUFBO0FBQUEsWUFBSyxXQUFVLFFBQWY7QUFDRSxpREFBSyxXQUFVLFlBQWYsR0FERjtBQUVFO0FBQUE7QUFBQSxjQUFLLFdBQVUsWUFBZjtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERjtBQUVFO0FBQUE7QUFBQSxnQkFBTyxXQUFVLFlBQWpCO0FBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERjtBQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkY7QUFHRTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUhGO0FBSUU7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFKRjtBQUtFO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBTEY7QUFNRTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQU5GO0FBT0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFQRjtBQVFFO0FBUkY7QUFERixlQURGO0FBYUU7QUFBQTtBQUFBO0FBQ0cscUJBQUtILEtBQUwsQ0FBV0MsSUFBWCxDQUFnQkcsUUFBaEIsQ0FBeUJDLEdBQXpCLENBQTZCLFVBQUNELFFBQUQsRUFBVUUsQ0FBVixFQUFjO0FBQzFDLHNCQUFNQyxXQUFVRCxJQUFFLENBQUYsSUFBSyxDQUFMLEdBQU8sZ0JBQVAsR0FBd0IsRUFBeEM7QUFDQSx5QkFDRTtBQUFBO0FBQUEsc0JBQUksS0FBS0EsQ0FBVCxFQUFZLFdBQVdDLFFBQXZCO0FBQ0U7QUFBQTtBQUFBO0FBQUtILCtCQUFTSTtBQUFkLHFCQURGO0FBRUU7QUFBQTtBQUFBO0FBQUksNkRBQUssV0FBVSxlQUFmLEVBQStCLEtBQUtKLFNBQVNLLFFBQTdDO0FBQUoscUJBRkY7QUFHRTtBQUFBO0FBQUE7QUFBS0wsK0JBQVNNO0FBQWQscUJBSEY7QUFJRTtBQUFBO0FBQUE7QUFBS04sK0JBQVNPO0FBQWQscUJBSkY7QUFLRTtBQUFBO0FBQUE7QUFBS1AsK0JBQVNRO0FBQWQscUJBTEY7QUFNRTtBQUFBO0FBQUE7QUFBS1IsK0JBQVNTO0FBQWQscUJBTkY7QUFPRTtBQUFBO0FBQUE7QUFBS1QsK0JBQVNVO0FBQWQscUJBUEY7QUFRRTtBQUFBO0FBQUE7QUFBSTtBQUFBO0FBQUEsMEJBQU0sdUJBQXFCVixTQUFTSSxRQUFwQztBQUFBO0FBQUE7QUFBSjtBQVJGLG1CQURGO0FBWUQsaUJBZEE7QUFESDtBQWJGO0FBRkYsV0FGRjtBQW9DRSxpREFBSyxXQUFVLFlBQWY7QUFwQ0Y7QUFORixPQURGO0FBaUREOzs7Ozs7Ozs7O29CQW5FS08sUUFBUUMsTzs7Ozs7O3VCQUNNLGdCQUFNQyxHQUFOLENBQVUsOERBQVYsQzs7O0FBQVpDLG1CO2lEQUVDLEVBQUNqQixNQUFLaUIsSUFBSWpCLElBQVYsRTs7O2lEQUdFLEVBQUNBLE1BQUtrQixLQUFLQyxLQUFMLENBQVd2QixlQUFlQyxPQUFmLENBQXVCLEtBQXZCLENBQVgsQ0FBTixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFSZ0IsZ0JBQU11QixTIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlUm9vdCI6IkM6L3BsYXlncm91bmRzL0JhcmNsYXlzUHJlbWllckxlYWd1ZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcclxuICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKCl7XHJcbiAgICBpZighcHJvY2Vzcy5icm93c2VyKXtcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldCgnaHR0cDovL2FwaS5mb290YmFsbC1kYXRhLm9yZy92MS9jb21wZXRpdGlvbnMvNDI2L2xlYWd1ZVRhYmxlJyk7XHJcblxyXG4gICAgcmV0dXJuIHtkYXRhOnJlcy5kYXRhfVxyXG4gICAgfVxyXG4gICAgZWxzZXtcclxuICAgICAgcmV0dXJuIHtkYXRhOkpTT04ucGFyc2Uoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnYnBsJykpfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50RGlkTW91bnQgKCkge1xyXG4gICAgaWYoIXNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ2JwbCcpKSBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdicGwnLCBKU09OLnN0cmluZ2lmeSh0aGlzLnByb3BzLmRhdGEpKVxyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCl7XHJcbiAgICBjb25zdCBsb2dvU3R5bGUgPSB7XHJcbiAgICAgIHdpZHRoOiAnMzBweCdcclxuICAgIH1cclxuICAgIHJldHVybihcclxuICAgICAgPGRpdj5cclxuICAgICAgICA8SGVhZD5cclxuICAgICAgICAgIDx0aXRsZT5MZWFndWUgVGFibGU8L3RpdGxlPlxyXG4gICAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cImluaXRpYWwtc2NhbGU9MS4wIHdpZHRoPWRldmljZS13aWR0aFwiIC8+XHJcbiAgICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImh0dHBzOi8vdW5wa2cuY29tL3B1cmVjc3NAMC42LjEvYnVpbGQvcHVyZS1taW4uY3NzXCIgLz5cclxuICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdXJlLWdcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHVyZS11LTEtM1wiPjwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdXJlLXUtMS0zXCI+XHJcbiAgICAgICAgICAgIDxoMT4gQmFyY2xheXMgUHJlbWllciBMZWFndWU8L2gxPlxyXG4gICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwicHVyZS10YWJsZVwiPlxyXG4gICAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgPHRoPlBvc2l0aW9uPC90aD5cclxuICAgICAgICAgICAgICAgICAgPHRoPlRlYW08L3RoPlxyXG4gICAgICAgICAgICAgICAgICA8dGg+UG9pbnRzPC90aD5cclxuICAgICAgICAgICAgICAgICAgPHRoPkdvYWxzPC90aD5cclxuICAgICAgICAgICAgICAgICAgPHRoPldpbnM8L3RoPlxyXG4gICAgICAgICAgICAgICAgICA8dGg+RHJhd3M8L3RoPlxyXG4gICAgICAgICAgICAgICAgICA8dGg+TG9zdDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgIDx0aD48L3RoPlxyXG4gICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmRhdGEuc3RhbmRpbmcubWFwKChzdGFuZGluZyxpKT0+e1xyXG4gICAgICAgICAgICAgICAgICBjb25zdCBvZGRPck5vdD0gaSUyPT0xP1wicHVyZS10YWJsZS1vZGRcIjpcIlwiO1xyXG4gICAgICAgICAgICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgICAgICAgICAgPHRyIGtleT17aX0gY2xhc3NOYW1lPXtvZGRPck5vdH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3N0YW5kaW5nLnBvc2l0aW9ufTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dGQ+PGltZyBjbGFzc05hbWU9XCJwdXJlLWltZyBsb2dvXCIgc3JjPXtzdGFuZGluZy5jcmVzdFVSSX0vPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3N0YW5kaW5nLnBvaW50c308L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRkPntzdGFuZGluZy5nb2Fsc308L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRkPntzdGFuZGluZy53aW5zfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3N0YW5kaW5nLmRyYXdzfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3N0YW5kaW5nLmxvc3Nlc308L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRkPjxMaW5rIGhyZWY9e2AvZGV0YWlscz9pZD0ke3N0YW5kaW5nLnBvc2l0aW9ufWB9Pk1vcmU8L0xpbms+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB1cmUtdS0xLTNcIj48L2Rpdj5cclxuXHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxuICB9XHJcbn1cclxuIl19