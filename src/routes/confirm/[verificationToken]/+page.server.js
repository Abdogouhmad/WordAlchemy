// Example of a SvelteKit route for handling confirmation links
// src/routes/confirm/[token].js
import { redirect } from "@sveltejs/kit";
import { prisma } from "../../../lib/server/prisma";

export const load = async context => {
  const { params } = context;
  const verificationToken = params.verificationToken;

  console.log("typeof verificationToken -->", typeof verificationToken);
  console.log("verificationToken -->", verificationToken);

  // Verify the token against the database
  const user = await prisma.user.findUnique({
    where: { verificationToken }
  });

  console.log("hello -->");

  if (user && !user.verified) {
    // Update the user's account to mark it as confirmed
    await prisma.user.update({
      where: { id: user.id },
      data: { verified: true }
    });

    // Redirect the user to a confirmation success page

    throw redirect(303, "/confirm/success");
  } else {
    // Redirect the user to a confirmation error page
    throw redirect(303, "/confirm/error");
  }
};
