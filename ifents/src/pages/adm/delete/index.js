function handleDeletePress() {
    Alert.alert(
        "Atenção",
        "Você tem certeza que deseja excluir este item?",
        [
            {
                text: "Não",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel"
            },
            { text: "Sim", onPress: () => console.log(`${props.id} deleted`) }
        ],
        { cancelable: false }
    );
}