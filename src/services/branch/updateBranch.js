import {
	okResponse,
	badRequestResponse,
} from '../../helpers/functions/ResponseHandler.js';
import { prisma } from '../../index.js';
export async function updateBranch(req, res, next) {
	console.log('👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀');
	try {
		const { id } = req.params;
		const { name, address, phoneNumber, email, image } = req.body;
		const checkBranch = await prisma.branch.findUnique({
			where: {
				id: parseInt(id),
			},
		});
		if (!checkBranch) {
			return badRequestResponse(res, 'Branch not found');
		}
		const updatedBranch = await prisma.branch.update({
			where: {
				id: parseInt(id),
			},
			data: {
				name: name ? name : checkBranch.name,
				address: address ? address : checkBranch.address,
				phoneNumber: phoneNumber
					? phoneNumber
					: checkBranch.phoneNumber,
				email: email ? email : checkBranch.email,
				image: image ? image : checkBranch.image,
			},
		});
		return okResponse(res, 'Branch updated successfully', updatedBranch);
	} catch (err) {
		next(err);
	}
}
