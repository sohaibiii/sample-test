import React from 'react';
import { View } from 'react-native';
import NCItem from "../NCItem";
import styles from "./styles";
import Account from "../../assets/account.svg";
import Activity from "../../assets/Activity.svg";
import Virus from "../../assets/virus.svg";
import Drugs from "../../assets/drugs.svg";
import Notification from "../../assets/notification.svg";

const NavigationContainer = () => {
  return (
    <View style={styles.mainContainer}>
      <NCItem
        title="Profile"
        icon={<Account width={20} />}
      />
      <NCItem
        title="Activity"
        icon={<Activity width={20} />}
      />
      <NCItem
        active
        title="Symptoms"
        icon={<Virus width={20} />}
      />
      <NCItem
        title="Medication"
        icon={<Drugs width={20} />}
      />
      <NCItem
        title="Schedular"
        icon={<Notification width={20} />}
      />
    </View>
  )
}


export default NavigationContainer;