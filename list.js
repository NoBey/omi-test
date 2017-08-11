import Omi from 'omi';

class List extends Omi.Component {
    render () {
        return `<ul>
                    <li o-repeat="item in items">{{item.text}}</li>
                </ul>`;
    }
}

export default List;
