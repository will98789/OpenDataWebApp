# ROOTbrowser datasets

There are two real data datasets for you to look at
* data_Egamma.root : electrons and photons
* data_Muons.root : muons

Then there are a range of simulated data datasets from 
* ggH125_ZZ4lep.root : Higgs production via gluon fusion
* VBFH125_ZZ4lep.root : Vector Boson Fusion Higgs Production
* WW.root : $$W$$ boson pair
* WZ.root : $$WZ$$ boson pair
* Zee.root : $$Z$$ boson decay to two electrons
* Zmumu.root : $$Z$$ boson decay to two muons
* Ztautau.root : $$Z$$ decay to two taus
* ZZ.root : $$Z$$ boson pair


## Simulated data
Simulated events are a key feature for the LHC experiments, commonly named Monte Carlo or more precisely Monte Carlo simulated data. 
These events are simulated using current theoretical models and are used to compare theory with real collision data.

The full simulation requires the following steps
* Event generation: Proton-proton collisions are simulated using programs relying on  theoretical calculations, phenomenological models and experimental inputs.

* Detector Simulation: Interaction of the generated particles inside the ATLAS detector is simulated.

* Digitisation: The detector response is simulated and written in a format compatible with the real output of the detector. Digitised signals from several simulated events are added to simulate the pile-up conditions caused by the high rate of collisions in the LHC.

* Reconstruction:  Particle trajectories and energies are calculated from the detector output. Such final samples are used by the physicists.

## Comparing data and simulated data

Data and simulated data do not always agree.  This can be due to various reasons, such as
* conditions not being exactly the same e.g. energy, pile-up etc.,
* not all background processes are included in the simulated data, or
* the physics has not been exactly modelled by the theory.

If the data and simulated data does not agree, it is important that physicists understand why.