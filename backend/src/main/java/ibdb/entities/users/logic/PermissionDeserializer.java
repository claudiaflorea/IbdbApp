package ibdb.entities.users.logic;

import java.io.IOException;

import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.core.TreeNode;
import com.fasterxml.jackson.databind.DeserializationContext;
import com.fasterxml.jackson.databind.JsonDeserializer;
import com.fasterxml.jackson.databind.ObjectMapper;

public class PermissionDeserializer extends JsonDeserializer<IPermission> {

	public IPermission deserialize(JsonParser jp, DeserializationContext context) throws IOException {
		ObjectMapper mapper = (ObjectMapper) jp.getCodec();
		TreeNode root = mapper.readTree(jp);
		
		System.out.println(root);

		return mapper.readValue(root.toString(), NoPermission.class);
	}
}