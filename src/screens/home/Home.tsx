import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  ActivityIndicator,
} from "react-native";
import { Auth, API } from "aws-amplify";
import { StackNavigationProp } from "@react-navigation/stack";
import DefaultButton from "../../components/button/Button";
import { Screens } from "../../../App";
type ProfileScreenNavigationProp = StackNavigationProp<any, "Profile">;

type Props = {
  navigation: ProfileScreenNavigationProp;
};
const Home = (props: Props) => {
  const [email, setEmail] = useState();
  const [cName, onChengeC] = useState("");
  const [idToken, setIdToken] = useState("");
  const [contact, setContact] = useState("");
  const [mode, setMode] =
    useState<"FORM" | "RESULT" | "ERROR" | "LOADING">("LOADING");

  useEffect(() => {
    Auth.currentUserInfo()
      .then((session) => {
        setEmail(session.attributes.email);
      })
      .catch(() => {})
      .finally(() => setMode("FORM"));
    Auth.currentSession().then((session) => {
      const t = session.getIdToken();
      setIdToken(t.getJwtToken());
    });
  }, []);

  const findContact = () => {
    setMode("LOADING")
    API.post("coding-assignment", "/contact-service", {
      headers: {
        "AUTH-ID": idToken,
      },
      response: true,
      body: {
        requestName: cName,
        userName: email,
        deviceName: "poco x3",
      },
    })
      .then((res) => {
        
        const data = res.data as { contact: string; name: string };
        const contact = data.contact;
        if(contact){
          setContact(data.contact);
          setMode("RESULT")
        }else{
          setContact("")
          setMode("ERROR")
        }
        
        
      })
      .catch((reson) => {
        console.log("reson:", reson);
        setMode("ERROR")
      });
  };

  switch (mode) {
    case "LOADING":
      return (
        <View style={styles.container}>
          <ActivityIndicator
            style={{ marginTop: 10 }}
            size="large"
            color="rgb(70, 48, 235)"
          />
        </View>
      );
    case "FORM":
      return (
        <View style={styles.container}>
          <Text style={styles.headerText}>Welcome</Text>
          <Text style={styles.headerText}>{email}</Text>
          <Text style={styles.normalText}>Find Contacts</Text>
          <TextInput
            style={styles.input}
            onChangeText={onChengeC}
            value={cName}
            placeholder="Enter Name"
          />
          <DefaultButton text="Search Contact" onPress={() => findContact()} />
          <DefaultButton text="logout" onPress={() => {
            setMode("LOADING");
            Auth.signOut().then(()=>{
              props.navigation.navigate(Screens.LOGIN);
            });
          }} />

        </View>
      );
    case "RESULT":
      return (
        <View style={styles.container}>
          <Text style={styles.normalText}>Seach Result for {cName}</Text>
          <Text style={styles.resultText}>{contact}</Text>
          <DefaultButton
            text="Search Again"
            onPress={() => {
              setContact("")
              onChengeC("")
              setMode("FORM");
            }}
          />
        </View>
      );
    default:
      return (
        <View style={styles.container}>
          <Text style={styles.errorText}>
          Sorry.Not fount any contact.
          </Text>
          <DefaultButton
            text="Retry"
            onPress={() => {
              setContact("")
              onChengeC("")
              setMode("FORM");
            }}
          />
        </View>
      );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ccc",
    alignItems: "center",
    justifyContent: "center",
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 5,
    color: "#333",
  },
  input: {
    elevation: 8,
    backgroundColor: "#ccc",
    borderRadius: 10,
    paddingVertical: 10,
    borderColor: "rgb(70, 48, 235)",
    borderWidth: 2,
    paddingHorizontal: 12,
    margin: 10,
    width: 230,
  },
  normalText: {
    fontSize: 14,
    marginTop: 15,
    color: "#333",
  },
  errorText: {
    fontSize: 22,
    marginTop: 10,
    color: "#e84a8c",
  },
  resultText: {
    fontSize: 22,
    marginTop: 10,
    fontWeight:"bold",
    color: "#0a88ab",
  },
  icon: {
    backgroundColor: "rgb(70, 48, 235)",
    padding: 10,
    borderRadius: 10,
  },
});

export default Home;
