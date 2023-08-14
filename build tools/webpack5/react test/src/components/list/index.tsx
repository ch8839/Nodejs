import React from 'react';
import './index.scss'

interface IProps {
    animals?: Array<string>
}

interface IState {
    fruits: Array<string>
}

class List extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            fruits: ['apple', 'banbana']
        }
    }

    handleClickIcon(e: React.MouseEvent) {
        console.log('>>>e', e)
    }

    render() {
        const fruits = this.state.fruits
        const animals = this.props.animals || []
        const len = 30
        return (
            <div className='list-container'>
                <i className='react-icon' onClick={this.handleClickIcon.bind(this)}></i>
                {
                    fruits.map(item => {
                        return (
                            <p key={item}>-{item}</p>
                        )
                    })
                }
                {
                    animals.map(item => {
                        return (
                            <p key={item}>+{item}</p>
                        )
                    })
                }
                <ul>
                    {Array(len).fill(0).map((_, i) => <li>{i}</li>)}
                </ul>
            </div>

        )
    }
}

export default List

