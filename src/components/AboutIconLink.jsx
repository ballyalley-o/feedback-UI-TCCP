import {FaQuestion} from 'react-icons/fa'
import {Link} from 'react-router-dom'

function AboutIconLink() {
  return (
    <div>
        <Link to={{
            pathname: '/about',

            }}>
            <FaQuestion size={30} />
        </Link>
    </div>
  )
}

export default AboutIconLink