import { Avatar, Divider } from 'antd'
import router from 'umi/router'
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
      </div>
    )
  }

  return (
    <div>
      <h1>
        Idea: {router.location.query.idea}
      </h1>
    </div>
  )
}