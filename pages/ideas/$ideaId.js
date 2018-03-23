import router from 'umi/router'

export default () => {
  console.info(router)
  return (
    <div>idea: {router.location.pathname}</div>
  )
}