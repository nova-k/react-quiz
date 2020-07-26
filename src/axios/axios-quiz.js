import axios from 'axios'

export default axios.create({
	baseURL: 'https://react-quiz-2d1b9.firebaseio.com/'
})