#!/bin/sh
/usr/bin/Sofia
touch /mnt/mtd/Config/maintain
echo 1 > /mnt/mtd/Config/RebootAbnormal
cp /var/sofia.log  /mnt/mtd/sofia.log
dmesg > /var/halted.log
date >> /var/halted.log
cat /proc/umap/* >> /var/halted.log
cat /proc/meminfo >> /var/halted.log
tail -c 20480 /var/halted.log > /mnt/mtd/halted.log
