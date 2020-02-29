package ibdb.entities.users.logic;

import java.io.IOException;

import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.databind.DeserializationContext;
import com.fasterxml.jackson.databind.JsonDeserializer;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ObjectNode;

import ibdb.entities.users.UserAccount;

public class AccountDeserializer extends JsonDeserializer<UserAccount> {

	public UserAccount deserialize(JsonParser jp, DeserializationContext context) throws IOException {
		ObjectMapper mapper = (ObjectMapper) jp.getCodec();
		ObjectNode root = mapper.readTree(jp);

		return mapper.readValue(root.toString(), UserAccount.class);
	}
}