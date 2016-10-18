import React, {Component, PropTypes} from 'react';
import {Platform, StyleSheet, View, Text, Modal, NetInfo} from 'react-native';

class NetState extends Component {
  static propTypes = {
    message: PropTypes.string
  }

  constructor(props) {
    super(props);

    this.state = {
      conected: false,
      message: props.message || 'No internet access'
    };
  }

  componentDidMount() {
    NetInfo.isConnected.fetch().then(isConnected => {
      this.setState({conected: isConnected});
    });

    NetInfo.isConnected.addEventListener(
      'change',
      (isConnected) => {
        this.setState({conected: isConnected});
      }
    );
  }

  componentWillReceiveProps(props) {

  }

  render() {
    let messageIOS = Platform.OS == 'ios' ? styles.messageIOS : {};

    return (
      <Modal
        animationType={"none"}
        transparent={true}
        visible={!this.state.conected}
        style={[styles.modal]}
        onRequestClose={() => {}}
      >
        <View style={[styles.message, messageIOS, this.props.style || {}]}>
          <Text style={[styles.messageText, this.props.styleText || {}]}>{this.state.message}</Text>
        </View>

      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 999999,
    backgroundColor: 'transparent'
  },
  message: {
    backgroundColor: '#ff4b54',
    justifyContent: 'center',
    paddingBottom: 5,
    height: 40
  },
  messageText: {
    color: '#ffffff',
    fontWeight: '600',
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 13,
  },
  messageIOS: {
    paddingTop: 20
  },
});

module.exports = NetState;
