import { StyleSheet, Text, View } from 'react-native'
import globalStyles from '../styles/globalStyles'

const WebsiteTraffic = () => {
  return (
    <View>
      <Text style={globalStyles.title}>WebsiteTraffic</Text>
      <Text style={globalStyles.text}>There will be website traffic here</Text>
    </View>
  );
};

const Sales = () => {
  return (
    <View>
      <Text style={globalStyles.title}>Sales</Text>
      <Text style={globalStyles.text}>There will be sales data here</Text>
    </View>
  );
};

const Inventory = () => {
    return (
      <View>
        <Text style={globalStyles.title}>Inventory</Text>
        <Text style={globalStyles.text}>There will be inventory data here</Text>
      </View>
    );
}

const AddNewItem = () => {
    return (
      <View>
        <Text style={globalStyles.title}>Add New Item</Text>
        <Text style={globalStyles.text}>There will be a form to add new items here</Text>
      </View>
    );
}

export { WebsiteTraffic, Sales, Inventory, AddNewItem };

const styles = StyleSheet.create({})