import { Keypair } from '@solana/web3.js';
import bcryptjs from 'bcryptjs';
import SolWallet from '../model/solwallet_model.js';
import User from '../model/user_model.js';

export const generateSolWallet = async (userId) => {
  try {
    const keypair = Keypair.generate();

    const publicKey = keypair.publicKey.toString();
    const privateKey = Buffer.from(keypair.secretKey).toString('base64');
    const hashedPrivateKey = bcryptjs.hashSync(privateKey, 10);

    // Create a new SolWallet entry
    const solWallet = new SolWallet({
      publicKey,
      privateKey: hashedPrivateKey,
      userId,
    });

    // Save the wallet in the database
    await solWallet.save();

    // Update the user's solWalletId
    await User.findByIdAndUpdate(userId, { solWalletId: solWallet._id });

    return solWallet;
  } catch (error) {
    throw new Error('Failed to create SOL Wallet');
  }
};
