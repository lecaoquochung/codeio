/**
 * Created by griga on 12/9/15.
 */
    import ReactDOM from 'react-dom'

let counter = 0;
let instances = {};
let ElementHolder = {
    instances: {},
    setHold: function(element){
        instances[this.instanceId] = element
    },
    getHold: function(){
        return instances[this.instanceId]
    },
    componentWillMount: function(){
        this.instanceId = 'ref' + counter++
    },
    componentDidMount: function(){
        let node = ReactDOM.findDOMNode(this);
        this.setHold(node)
    },
    componentWillUnmount: function(){
        delete instances[this.instanceId]
    }
};

export default ElementHolder


