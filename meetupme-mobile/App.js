import React, { Component } from "react";
import { StyleSheet, Text, View, ActivityIndicator } from "react-native";

import { fetchMeetups } from "./constants/api";

class App extends Component {
  static defaultProps = {
    fetchMeetups
  };

  state = {
    loading: false,
    meetups: []
  };

  async componentDidMount() {
    this.setState({ loading: true });
    const data = await fetch("http://192.168.1.100:3000/api/meetups").then(
      res => res.json()
    );

    setTimeout(() => {
      this.setState({
        loading: false,
        meetups: data.meetups
      });
    }, 1000);
  }
  render() {
    if (this.state.loading) {
      return (
        <View style={styles.container}>
          <ActivityIndicator size="large" />
        </View>
      );
    }
    return (
      <View style={styles.container}>
        <Text>Namo Buddhya!!</Text>
        <Text>Namo Buddhya!!</Text>
        {this.state.meetups.map((meetup, i) => (
          <Text key={i}>{meetup.title}</Text>
        ))}
      </View>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
