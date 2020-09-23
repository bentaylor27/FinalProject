# Copy this text into your `.bash` homework file. Copy and paste the code you successfully used into terminal below each prompt

# Open the **Terminal app**

# Create a new directory on your desktop called `galaxy_far_far_away`and enter it
users-Air:~ user$ cd Desktop
users-Air:Desktop user$ mkdir galaxy_far_far_away
users-Air:Desktop user$ cd galaxy_far_far_away
users-Air:galaxy_far_far_away user$ 
# Create a directory called `death_star`
users-Air:galaxy_far_far_away user$ mkdir death_star
# and make the following files inside of it:
# darth_vader.txt
# princess_leia.txt
# storm_trooper.txt
users-Air:death_star user$ touch darth_vader.txt princess_leia.txt storm_trooper.txt
# In `galaxy_far_far_away`, make a directory named `tatooine`
users-Air:galaxy_far_far_away user$ mkdir tatooine
# and create the following files in it:
# luke.txt
# ben_kenobi.txt
users-Air:tatooine user$ touch luke.txt ben_kenobi.txt
# Inside of `tatooine` make a directory called `millenium_falcon`
# and in it create:
# han_solo.txt
# chewbaca.txt
users-Air:tatooine user$ mkdir millenium_falcon
users-Air:tatooine user$ cd millenium_falcon
users-Air:millenium_falcon user$ touch han_solo.txt chewbaca.txt
# Rename `ben_kenobi.txt` to `obi_wan.txt
users-Air:tatooine user$ mv ben_kenobi.txt obi_wan.txt
# Copy `storm_trooper.txt` from `death_star` to `tatooine`
users-Air:death_star user$ cp storm_trooper.txt ../tatooine
users-Air:death_star user$ ls
darth_vader.txt		princess_leia.txt	storm_trooper.txt
users-Air:death_star user$ cd ..
users-Air:galaxy_far_far_away user$ cd tatooine
users-Air:tatooine user$ ls
luke.txt		obi_wan.txt
millenium_falcon	storm_trooper.txt
# Move `luke.txt` and `obi_wan.txt` to the `millenium_falcon`
users-Air:tatooine user$ mv luke.txt obi_wan.txt millenium_falcon
# Move `millenium_falcon` out of `tatooine` and into `galaxy_far_far_away`
users-Air:tatooine user$ mv millenium_falcon galaxy_far_far_away
# Move `millenium_falcon` into `death_star`
users-Air:galaxy_far_far_away user$ mv millenium_falcon death_star
# Move `princess_leia.txt` into the `millenium_falcon`
users-Air:death_star user$ mv princess_leia.txt millenium_falcon
# Delete `obi_wan.txt`
users-Air:galaxy_far_far_away user$ rm obi_wan.txt
clearly deleted obi wan and luke when I was moving them to the millenium falcon
# In `galaxy_far_far_away`, make a directory called `yavin_4`
users-Air:galaxy_far_far_away user$ mkdir yavin_4
# Move the `millenium_falcon` out of the `death_star` and into `yavin_4`
users-Air:galaxy_far_far_away user$ mv millenium_falcon ../yavin_4
# Make a directory in `yavin_4` called `x_wing`
users-Air:yavin_4 user$ mkdir x_wing
# Move `princess_leia.txt` to `yavin_4` and `luke.txt` to `x_wing`
users-Air:galaxy_far_far_away user$ mv princess_leia.txt ../yavin_4
users-Air:galaxy_far_far_away user$ mv luke.txt ../yavin_4
# Move the `millenium_falcon` and `x_wing` out of `yavin_4` and into `galaxy_far_far_away`

# In `death_star`, create directories for `tie_fighter_1`, `tie_fighter_2` and `tie_fighter_3`

# Move `darth_vader.txt` into `tie_fighter_1`

# Make a copy of `storm_trooper.txt` in both `tie_fighter_2` and `tie_fighter_3`

# Move all of the `tie_fighters` out of the `death_star` and into `galaxy_far_far_away`

# Be careful with this command - cannot undo!

# Make sure you delete the right thing, or you could accidentally delete the contents of your computer (it has happened).

# This command will typically not ask you if you really want to delete. It will just delete so doublecheck you are deleting exactly what you mean to delete

# Remove `tie_fighters` 2 and 3.

# Touch a file in "**x_wing**" called "**the_force.txt**".

# Destroy the "**death_star**" and anyone inside of it.

# Return "**x_wing**" and the "**millenium_falcon**" to "**yavin_4**".

# Celebrate!