# When validation runs : onChange(), onBlur(), onSubmit() validation will run. So onSubmit() will not works if validation fails, react will not allow form submission, so there is no need of handling form submission manually.

REACT HOOKS
Basic Hooks
* useState
* useEffect
* useContext*

Additional Hooks
* useReducer
* useCallback
* useMemo
* useRef
* useImperativeHandle
* useLayoutEffect
* useDebugValue

Table Hooks

* useTable
* useFilter
* useGlobalFilter
* useSortBy
* useGroupBy 
* useExpanded 
* usePagination 

ROUT HOOKS

* useHistory
* useLocation
* useParams
* useRouteMatch

* useSelector


#useHistory:The useHistory hook gives you access to the history instance that you may use to navigate.
#useLocation:The useLocation hook returns the location object that represents the current URL. You can think about it like a useState that returns a new location whenever the URL changes.
#useParams:useParams returns an object of key/value pairs of URL parameters. Use it to access match.params of the current <Route>.
# useRouteMatch:The useRouteMatch hook attempts to match the current URL in the same way that a <Route> would. Its mostly useful for getting access to the match data without actually rendering a <Route>.




