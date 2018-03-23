import { Avatar, Divider } from 'antd'
import router from 'umi/router'
import NewIdea from '../../components/NewIdea'
import firebase from '../../services/firebase'

export default () => {
  const user = firebase.auth().currentUser
  if (user) {
    return (
      <div>
        <h1>Welcome: {user.displayName}
          <Divider type="vertical" />
          <Avatar src={user.photoURL} />
        </h1>
        <p>邮箱：{user.email} {user.emailVerified && '已验证.'}</p>
        <p>现在开始规整你的新想法吧，每一个想法都值得被「达到」。</p>
        <NewIdea type={router.location.pathname.split('/')[2]}/>
      </div>
    )
  }

  return (
    <div>
      <h1>
        Idea: {router.location.query.idea}
      </h1>
      <NewIdea type={router.location.pathname.split('/')[2]}/>
    </div>
  )
}