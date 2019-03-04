import createBrowserHistory from 'history/createBrowserHistory'

const history = createBrowserHistory(
  {
    forceRefresh: true
  }
)

history.listen(location => {

})

export default history


