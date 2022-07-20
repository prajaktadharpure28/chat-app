
import './App.css';
import SendMessage from './SendMessage/SendMessage';
import ReceivedMessage from './ReceivedMessage/ReceivedMessage';

const data =[
{
  user: 'Prajakta',
  message: 'hello'
},
{
  user: 'Yash',
  message: 'hello'
},
{
  user: 'Vaibhavi',
  message: 'hiiiiii'
},
{
  user: 'Anand',
  message: 'hey'
},
{
  user: 'Tejal',
  message: 'gm'
}
]

function App() {
  const currentUser = 'Prajakta';
  return (
    <>
    <div className='container'>
    <div className='title'>
    <div className='text-center'>
      <h2>Chat-Application</h2>
      </div>
    </div>
    </div>
    <div className='container'>
    <div className='box'>
    {
          data.map((item, index) => {
            if(item.user === currentUser){
              return <SendMessage key={index} user={item.user} message={item.message} />
              
            }
            else{
              return <ReceivedMessage key={index} user={item.user} message={item.message} />
            }
          })
       }
    </div>
    </div>
    </>
  );
}

export default App;
