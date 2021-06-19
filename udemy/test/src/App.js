import faker from 'faker';
import CommentDetail from './components/CommentDetail';
import ApprovalCard from './components/ApprovalCard';

export default function App() {
    return (
        <div className='ui container comments'>
            <ApprovalCard>
                <CommentDetail avatar={faker.image.avatar()} author="Sam" time="4:00 PM" content="Nice" />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail avatar={faker.image.avatar()} author="Joy" time="5:00 PM" content="Bad" />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail avatar={faker.image.avatar()} author="Lee" time="6:00 PM" content="Great" />
            </ApprovalCard>
        </div>
    )
}