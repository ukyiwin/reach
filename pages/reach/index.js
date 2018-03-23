import IdeaList from '../../components/IdeaList'
import { ideas } from '../../services/mockData'

export default () => (
  <div>
    <h1>达成效果并复盘，找出改进的地方。</h1>
    <blockquote>
      避免信息重复，先搜索别人的「得」，然后进行「能」的训练，如果你直接「用」过就更好不过啦。
      得练用思，产生新知再循环。
    </blockquote>
    <IdeaList ideas={ideas} />
  </div>
)