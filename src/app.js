/**
 * Created by jiangzg on 2017/5/6.
 */

import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from './actions/appAction';

class App extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        let { actions } = this.props;
        alert('dddv');
        return (
            <div onClick={actions.first}>scs</div>
        );
    }
}

const mapStateToProps = state => ({
    appleBasket: state.appleBasket
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(actions, dispatch)
});

export default connect(mapStateToProps,mapDispatchToProps)(App);