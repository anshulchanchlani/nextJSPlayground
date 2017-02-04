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

var _link = require('C:\\playgrounds\\BarclaysPremierLeague\\node_modules\\next\\dist\\lib\\link.js');

var _link2 = _interopRequireDefault(_link);

var _head = require('C:\\playgrounds\\BarclaysPremierLeague\\node_modules\\next\\dist\\lib\\head.js');

var _head2 = _interopRequireDefault(_head);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

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
      //Cache data in session storage if not already present
      if (!sessionStorage.getItem('bpl')) sessionStorage.setItem('bpl', (0, _stringify2.default)(this.props.data));
    }
  }, {
    key: 'render',
    value: function render() {
      var detailStyle = {
        ul: {
          marginTop: '100px'
        }
      };
      var homeButtonStyle = {
        marginTop: '30px',
        marginLeft: '30px'

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
          _react2.default.createElement('meta', { name: 'viewport', content: 'initial-scale=1.0, width=device-width' }),
          _react2.default.createElement('link', { rel: 'stylesheet', href: 'https://unpkg.com/purecss@0.6.1/build/pure-min.css' })
        ),
        _react2.default.createElement(
          'div',
          { className: 'pure-g' },
          _react2.default.createElement(
            'div',
            { className: 'pure-u-8-24' },
            _react2.default.createElement(
              'div',
              { style: homeButtonStyle },
              _react2.default.createElement(
                _link2.default,
                { href: '/' },
                'Home'
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'pure-u-4-24' },
            _react2.default.createElement(
              'h2',
              null,
              this.props.standing[0].teamName
            ),
            _react2.default.createElement('img', { src: this.props.standing[0].crestURI, className: 'pure-img' }),
            _react2.default.createElement(
              'h3',
              null,
              'Points: ',
              this.props.standing[0].points
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'pure-u-12-24' },
            _react2.default.createElement(
              'ul',
              { style: detailStyle.ul },
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'strong',
                  null,
                  'Goals'
                ),
                ': ',
                this.props.standing[0].goals
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'strong',
                  null,
                  'Wins'
                ),
                ': ',
                this.props.standing[0].wins
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'strong',
                  null,
                  'Losses'
                ),
                ': ',
                this.props.standing[0].losses
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'strong',
                  null,
                  'Draws'
                ),
                ': ',
                this.props.standing[0].draws
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'strong',
                  null,
                  'Goals Against'
                ),
                ': ',
                this.props.standing[0].goalsAgainst
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'strong',
                  null,
                  'Goal Difference'
                ),
                ': ',
                this.props.standing[0].goalDifference
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'strong',
                  null,
                  'Played'
                ),
                ': ',
                this.props.standing[0].playedGames
              )
            )
          )
        )
      );
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(_ref2) {
        var query = _ref2.query;
        var id, res, bplData;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                id = query.id;

                if (process.browser) {
                  _context.next = 8;
                  break;
                }

                _context.next = 4;
                return _axios2.default.get('http://api.football-data.org/v1/competitions/426/leagueTable');

              case 4:
                res = _context.sent;
                return _context.abrupt('return', {
                  data: res.data,
                  //Filter and return data based on query
                  standing: res.data.standing.filter(function (s) {
                    return s.position == id;
                  })
                });

              case 8:
                //Not on the server just navigating, so use the cache
                bplData = JSON.parse(sessionStorage.getItem('bpl'));
                return _context.abrupt('return', { standing: bplData.standing.filter(function (s) {
                    return s.position == id;
                  }) });

              case 10:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps(_x) {
        return _ref.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);
  return _class;
}(_react2.default.Component);

exports.default = _class;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxwbGF5Z3JvdW5kc1xcQmFyY2xheXNQcmVtaWVyTGVhZ3VlXFxwYWdlc1xcZGV0YWlscy5qcyJdLCJuYW1lcyI6WyJzZXNzaW9uU3RvcmFnZSIsImdldEl0ZW0iLCJzZXRJdGVtIiwicHJvcHMiLCJkYXRhIiwiZGV0YWlsU3R5bGUiLCJ1bCIsIm1hcmdpblRvcCIsImhvbWVCdXR0b25TdHlsZSIsIm1hcmdpbkxlZnQiLCJzdGFuZGluZyIsInRlYW1OYW1lIiwiY3Jlc3RVUkkiLCJwb2ludHMiLCJnb2FscyIsIndpbnMiLCJsb3NzZXMiLCJkcmF3cyIsImdvYWxzQWdhaW5zdCIsImdvYWxEaWZmZXJlbmNlIiwicGxheWVkR2FtZXMiLCJxdWVyeSIsImlkIiwicHJvY2VzcyIsImJyb3dzZXIiLCJnZXQiLCJyZXMiLCJmaWx0ZXIiLCJzIiwicG9zaXRpb24iLCJicGxEYXRhIiwiSlNPTiIsInBhcnNlIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O3dDQXFCcUI7QUFDakI7QUFDQSxVQUFHLENBQUNBLGVBQWVDLE9BQWYsQ0FBdUIsS0FBdkIsQ0FBSixFQUNFRCxlQUFlRSxPQUFmLENBQXVCLEtBQXZCLEVBQTZCLHlCQUFlLEtBQUtDLEtBQUwsQ0FBV0MsSUFBMUIsQ0FBN0I7QUFDSDs7OzZCQUVPO0FBQ04sVUFBTUMsY0FBWTtBQUNoQkMsWUFBRztBQUNEQyxxQkFBVTtBQURUO0FBRGEsT0FBbEI7QUFLQSxVQUFNQyxrQkFBZ0I7QUFDcEJELG1CQUFVLE1BRFU7QUFFcEJFLG9CQUFXOztBQUZTLE9BQXRCOztBQU1BLGFBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBRUUsa0RBQU0sTUFBSyxVQUFYLEVBQXNCLFNBQVEsdUNBQTlCLEdBRkY7QUFH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UyIsImZpbGUiOiJkZXRhaWxzLmpzIiwic291cmNlUm9vdCI6IkM6L3BsYXlncm91bmRzL0JhcmNsYXlzUHJlbWllckxlYWd1ZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcclxuICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKHtxdWVyeX0pe1xyXG4gICAgY29uc3QgaWQgPSBxdWVyeS5pZDtcclxuICAgIGlmKCFwcm9jZXNzLmJyb3dzZXIpe1xyXG4gICAgICAvL01lYW5zIHN0aWxsIG9uIHRoZSBzZXJ2ZXIgc28gbWFrZSBhIHJlcXVlc3RcclxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KCdodHRwOi8vYXBpLmZvb3RiYWxsLWRhdGEub3JnL3YxL2NvbXBldGl0aW9ucy80MjYvbGVhZ3VlVGFibGUnKTtcclxuICAgICAgcmV0dXJue1xyXG4gICAgICAgIGRhdGE6IHJlcy5kYXRhLFxyXG4gICAgICAgIC8vRmlsdGVyIGFuZCByZXR1cm4gZGF0YSBiYXNlZCBvbiBxdWVyeVxyXG4gICAgICAgIHN0YW5kaW5nOiByZXMuZGF0YS5zdGFuZGluZy5maWx0ZXIocz0+cy5wb3NpdGlvbj09aWQpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGVsc2V7XHJcbiAgICAgIC8vTm90IG9uIHRoZSBzZXJ2ZXIganVzdCBuYXZpZ2F0aW5nLCBzbyB1c2UgdGhlIGNhY2hlXHJcbiAgICAgIGNvbnN0IGJwbERhdGEgPSBKU09OLnBhcnNlKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ2JwbCcpKTtcclxuICAgICAgcmV0dXJuIHtzdGFuZGluZzogYnBsRGF0YS5zdGFuZGluZy5maWx0ZXIocz0+cy5wb3NpdGlvbj09aWQpfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50RGlkTW91bnQoKXtcclxuICAgIC8vQ2FjaGUgZGF0YSBpbiBzZXNzaW9uIHN0b3JhZ2UgaWYgbm90IGFscmVhZHkgcHJlc2VudFxyXG4gICAgaWYoIXNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ2JwbCcpKVxyXG4gICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdicGwnLEpTT04uc3RyaW5naWZ5KHRoaXMucHJvcHMuZGF0YSkpXHJcbiAgfVxyXG5cclxuICByZW5kZXIoKXtcclxuICAgIGNvbnN0IGRldGFpbFN0eWxlPXtcclxuICAgICAgdWw6e1xyXG4gICAgICAgIG1hcmdpblRvcDonMTAwcHgnXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbnN0IGhvbWVCdXR0b25TdHlsZT17XHJcbiAgICAgIG1hcmdpblRvcDonMzBweCcsXHJcbiAgICAgIG1hcmdpbkxlZnQ6JzMwcHgnXHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybihcclxuICAgICAgPGRpdj5cclxuICAgICAgICA8SGVhZD5cclxuICAgICAgICAgIDx0aXRsZT5MZWFndWUgVGFibGU8L3RpdGxlPlxyXG4gICAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cImluaXRpYWwtc2NhbGU9MS4wLCB3aWR0aD1kZXZpY2Utd2lkdGhcIiAvPlxyXG4gICAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL3VucGtnLmNvbS9wdXJlY3NzQDAuNi4xL2J1aWxkL3B1cmUtbWluLmNzc1wiIC8+XHJcbiAgICAgICAgPC9IZWFkPlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB1cmUtZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHVyZS11LTgtMjRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgIHN0eWxlPXtob21lQnV0dG9uU3R5bGV9PjxMaW5rIGhyZWY9XCIvXCI+SG9tZTwvTGluaz48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB1cmUtdS00LTI0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMj57dGhpcy5wcm9wcy5zdGFuZGluZ1swXS50ZWFtTmFtZX08L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17dGhpcy5wcm9wcy5zdGFuZGluZ1swXS5jcmVzdFVSSX0gY2xhc3NOYW1lPVwicHVyZS1pbWdcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5Qb2ludHM6IHt0aGlzLnByb3BzLnN0YW5kaW5nWzBdLnBvaW50c308L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHVyZS11LTEyLTI0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBzdHlsZT17ZGV0YWlsU3R5bGUudWx9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxzdHJvbmc+R29hbHM8L3N0cm9uZz46IHt0aGlzLnByb3BzLnN0YW5kaW5nWzBdLmdvYWxzfTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PHN0cm9uZz5XaW5zPC9zdHJvbmc+OiB7dGhpcy5wcm9wcy5zdGFuZGluZ1swXS53aW5zfTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PHN0cm9uZz5Mb3NzZXM8L3N0cm9uZz46IHt0aGlzLnByb3BzLnN0YW5kaW5nWzBdLmxvc3Nlc308L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxzdHJvbmc+RHJhd3M8L3N0cm9uZz46IHt0aGlzLnByb3BzLnN0YW5kaW5nWzBdLmRyYXdzfTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PHN0cm9uZz5Hb2FscyBBZ2FpbnN0PC9zdHJvbmc+OiB7dGhpcy5wcm9wcy5zdGFuZGluZ1swXS5nb2Fsc0FnYWluc3R9PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48c3Ryb25nPkdvYWwgRGlmZmVyZW5jZTwvc3Ryb25nPjoge3RoaXMucHJvcHMuc3RhbmRpbmdbMF0uZ29hbERpZmZlcmVuY2V9PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48c3Ryb25nPlBsYXllZDwvc3Ryb25nPjoge3RoaXMucHJvcHMuc3RhbmRpbmdbMF0ucGxheWVkR2FtZXN9PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgfVxyXG59XHJcbiJdfQ==