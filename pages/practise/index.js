import IdeaList from '../../components/IdeaList'
import { ideas } from '../../services/mockData'

export default () => (
  <div>
    <h1>刻意练习，找到 @老师 给予反馈 (多种形态，视频、影音，或者拿写作为例，推广线下活动etc)</h1>
    <IdeaList ideas={[...ideas, ...ideas]} />
  </div>
)