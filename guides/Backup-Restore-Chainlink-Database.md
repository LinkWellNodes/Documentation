# Backup / Restore the Chainlink Database

The Chainlink database stores information about all jobs, bridges, run history, and even the node wallet keys.

Having a process to backup and restore this database is an important part of a node operator's disaster recovery plan. These steps will also help you to recover your node's configuration in the event you need to migrate your database to a new machine (stack migration, hardware upgrade, etc.).

NOTE: if you'd simply like to back up / restore the node's keystores (and not all other configuration info), please instead see [Backup / Restore Chainlink Keys / Wallet](/guides/Backup-Restore-Chainlink-Keys.md).

# Prerequisite: Set up pgAdmin4

Before following the below backup / restore steps, you must ensure your access to pgAdmin4 (and the Chainlink database) is set up correctly:

1. Log in to pgAdmin GUI (can be accessed at `<NODE ADDRESS>:40000`) using the credentials specified in your CloudFormation template (id=`CLGUIEmail`, pw=`PGAdminPassword`).
1. Connect pgAdmin to your Chainlink database by clicking 'Add New Server' (have the database URL, port, user, and password handy for this).

# Backup instructions

Export the database using the pgAdmin4 GUI, and copy the resulting file to an external host:

### Step 1: Export the existing database (pgAdmin4)

1. Log in to pgAdmin GUI (can be accessed at `<NODE ADDRESS>:40000`) using the credentials specified in your CloudFormation template (id=`CLGUIEmail`, pw=`PGAdminPassword`).
1. In the left-hand panel, expand Servers -> `<YOUR SERVER>` -> 'Databases'.
1. Right-click your database (ie, `CLEKT`) and click **Backup...**: 
1. Under 'General', enter a filename (ie, `dbbackup.sql`).
1. Under 'General' choose a Format of 'Plain'
1. Under 'Data/Objects', make sure 'Data' is checked.
1. Under 'Options', make sure 'Include CREATE DATABASE statement' is checked.
1. Click **Backup**.
1. When done, a dialog in the lower-right should appear. Click the 'More details...' button:
![Progress dialog](/guides/images/pgAdmin-backup-statusbox.png)

1. The resulting dialog will show you the path of the export file. Copy this path for later use. We will call this `BACKUP_LOCATION`: 
![More details dialog](/guides/images/pgAdmin-backup-moredetails.png)

### Step 2: Copy the backup from the pgAdmin4 container (SSH terminal)

Move the backup to an accessible folder:

1. Run the following commands:
```
# Create a directory for the backup
mkdir -p /lw/pgadmin4/config

# Elevate permissions for the backup directory
chmod 777 /lw/pgadmin4/config

# Copy the backup from the Docker container to the local backup folder
docker exec -it pgadmin4 cp <BACKUP_LOCATION> /pgadmin4-config/.
```

The file is now available at `/lw/pgadmin4/config`.

### Step 3: Move the backup file off-machine

As a final step, use your favorite SSH tool to copy the database backup file to a separate secure storage location. As an easy first step, you can use software like 7zip to create a password-protected archive for these files. For security reasons, remember to delete the copy you've created on the local EC2 instance.

# Restore instructions

Copy the backup file to the pgAdmin4 host, and use the pgAdmin4 GUI to import the database.

### Step 1: Move the backup file onto the pgAdmin4 machine

Using your favorite SSH tool, copy the database backup file (ie, `dbbackup.sql`) onto the pgAdmin4 host machine at `/lw/pgadmin4/config`.

### Step 2: Copy the backup to the pgAdmin4 container (SSH terminal)

1. Run the following commands:

```
docker exec -it pgadmin4 cp /pgadmin4-config/<BACKUP_FILE> <BACKUP_LOCATION>/.
# Example: 
# docker exec -it pgadmin4 cp /pgadmin4-config/dbbackup.sql /var/lib/pgadmin/storage/my_email.com/.
```

### Step 3: Import the database (pgAdmin4)

1. Log in to pgAdmin GUI (can be accessed at `<NODE ADDRESS>:40000`) using the credentials specified in your CloudFormation template (id=`CLGUIEmail`, pw=`PGAdminPassword`).
1. Navigate to 'Tools' -> 'Restore...'.
1. Under 'Filename', click the 'Browse...' icon.
1. Select the file you've copied into the pgAdmin4 container in **Step 2**, above.
1. Proceed with the import!

# Restore instructions (alternate method)

Using the pgAdmin GUI only, create a new database and copy the contents of the database backup file (ie, `dbbackup.sql`) into the Query Tool:

1. In the left-hand panel, expand 'Servers' -> `<YOUR SERVER>`.
1. Right-click 'Databases' and select 'Create' -> 'Database...'.
1. Give the database the same name as contained within the database backup file (ie, `CLEKT`).
1. Once the new (empty) database has been created, right-click it in the left-hand panel and select 'Query Tool'.
1. Copy the contents of the database backup file (ie, `dbbackup.sql`) into the Query Tool, REMOVING any `CREATE DATABASE` or `DROP DATABASE` statements first, and execute the query.