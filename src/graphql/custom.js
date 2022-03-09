import { GraphQLList, GraphQLNonNull } from "graphql";
import { getUsers } from "./mutations";
import User from "./schema.json";

const UserQueries = {
	users: {
		type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(User))),
		args: {
			role: {
				type: UserRoleEnum,
			},
		},
		resolve: (_source, { role }) => {
			const result = getUsers();
			if (role != null) {
				return result.filter((user) => user.role === role);
			}
			return result;
		},
	},
};
const UserMutations = {
	createUser: {
		type: CreateUserPayload,
		args: {
			input: {
				type: new GraphQLNonNull(CreateUserInput),
			},
		},
		resolve: (_source, args) => {
			const { input } = args;

			if (input.email && !isEmail(input.email)) {
				throw new Error("Email is not in valid format");
			}
			return {
				user: createUser(input),
			};
		},
	},
	createUsers: {
		type: CreateUsersPayload,
		args: {
			input: {
				type: new GraphQLNonNull(
					new GraphQLList(new GraphQLNonNull(CreateUserInput))
				),
			},
		},
		resolve: (_source, { input }) => {
			const createdUsers = createUsers(input);
			return {
				users: createdUsers,
			};
		},
	},
};

export default UserMutations;
