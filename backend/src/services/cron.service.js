import cron from "node-cron";
import { prisma } from "../config/db.js";
import { sendSMS } from "./sms.service.js";

cron.schedule("0 9 ***", async () => {
  const fees = await prisma.fee.findMany({
    where: { status: "pending" },
    include: { user: true },
  });

  const today = new Date();

  for (let fee of fees) {
    if (fee.dueDate <= today && !fee.lastAlert) {
      await sendSMS(
        fee.user.phone,
        `Your fee ${fee.amount} is due. please pay.`,
      );

      await prisma.fee.update({
        where: { id: fee.id },
        data: { lastAlert: new Date() },
      });
    }
  }
});
