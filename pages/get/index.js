import { Avatar, Button, Card, Col, Divider, Icon, Row } from 'antd'
import withRouter from 'umi/withRouter'
import IdeaList from '../../components/IdeaList'
import { ideas } from '../../services/mockData'

export default withRouter(({ location }) => (
  <div>
    <h1>「得」：想法，是可以被规整的。</h1>
    <blockquote>以教为学，@学生们，学生表示：学会了！然后学生就可以选择做下一步。</blockquote>
    <IdeaList ideas={[...ideas, ...ideas, ...ideas]} />
  </div>
))