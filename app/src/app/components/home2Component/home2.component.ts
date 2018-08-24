/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit, Pipe, PipeTransform } from '@angular/core'
import { ModelMethods } from '../../lib/model.methods';
import { NDataModelService } from 'neutrinos-seed-services';
import { Router } from '@angular/router'
import { imagedataService } from '../../services/imageData/imagedata.service';
import { gallerydataService } from '../../services/galleryData/gallerydata.service';
import { NLogoutService } from 'neutrinos-seed-services';

/**
* Model import Example :
* import { HERO } from '../models/hero.model';
*/

/**
 * Service import Example :
 * import { HeroService } from '../services/hero/hero.service';
 */

@Component({
    selector: 'bh-home2',
    templateUrl: './home2.template.html'
})

export class home2Component implements OnInit {
    dm: ModelMethods;
    remember;
    user;
    name;
    text;
    arrayLists = [];
    gridval = 40;
    zoom = 23;
    images;
    image = [];
    details = [];
    constructor(
        private bdms: NDataModelService,
        private imagedata: imagedataService,
        private router: Router,
        private gallerydata: gallerydataService,
        private logoutservice: NLogoutService

    ) {
        this.dm = new ModelMethods(this.bdms);
    }

    ngOnInit() {
        this.arrayLists = this.imagedata.images[1].images ;
        this.countingImages();
        this.user = this.imagedata.images[0].user.name;
        this.countingImages();
    }
    logout() {
        this.logoutservice.logout();
        this.router.navigate(['/login']);
    }

    forZoom() {
        if (this.gridval == 20) {
            this.zoom = 18;
        } else if (this.gridval == 40) {
            this.zoom = 23;
        } else if (this.gridval == 60) {
            this.zoom = 30;
        } else if (this.gridval == 80) {
            this.zoom = 47;
        } else if (this.gridval == 100) {
            this.zoom = 47;
        }
    }

    gridAdd() {

        if (this.gridval < 100) {
            this.gridval = this.gridval + 20;
        }
        this.forZoom();
    }

    gridSub() {

        if (this.gridval > 20) {
            this.gridval = this.gridval - 20;
        }
        this.forZoom();
    }
    textClick() {
        console.log(this.text);
    }

    onImgClick(img) {
    console.log(img)
     this.zoom = 47;
    }


    menubtn1(data,i) {
        let idOfDiv = 'heading'+i;
        console.log(idOfDiv)
        let el = document.getElementById(idOfDiv)
        el.scrollIntoView()
    }

    //for getting the data frpm database we need to use this method
    get(galleryDb, filter?, keys?, sort?, pagenumber?, pagesize?) {
        this.dm.get(galleryDb, this, filter, keys, sort, pagenumber, pagesize,
            result => {
                // On Success code here
            },
            error => {
                // Handle errors here
            });
    };

    numOfImages = 0;
    countingImages() {
        for (let i = 0; i < this.arrayLists.length; i++) {
            this.numOfImages = this.numOfImages + this.arrayLists[i].images.length;
        }
    }
    getById(dataModelName, dataModelId) {
        this.dm.getById(dataModelName, dataModelId,
            result => {
                // On Success code here
            },
            error => {
                // Handle errors here
            })
    }

    put(dataModelName, dataModelObject) {
        this.dm.put(dataModelName, dataModelObject,
            result => {
                // On Success code here
            }, error => {
                // Handle errors here
            })
    }

    validatePut(formObj, dataModelName, dataModelObject) {
        this.dm.validatePut(formObj, dataModelName, dataModelObject,
            result => {
                // On Success code here
            }, error => {
                // Handle errors here
            })
    }

    update(dataModelName, update, filter, options) {
        const updateObject = {
            update: update,
            filter: filter,
            options: options
        };
        this.dm.update(dataModelName, updateObject,
            result => {
                //  On Success code here
            }, error => {
                // Handle errors here
            })
    }

    delete(dataModelName, filter) {
        this.dm.delete(dataModelName, filter,
            result => {
                // On Success code here
            }, error => {
                // Handle errors here
            })
    }

    deleteById(dataModelName, dataModelId) {
        this.dm.deleteById(dataModelName, dataModelId,
            result => {
                // On Success code here
            }, error => {
                // Handle errors here
            })
    }

    updateById(dataModelName, dataModelId, dataModelObj) {
        this.dm.updateById(dataModelName, dataModelId, dataModelObj,
            result => {
                // On Success code here
            }, error => {
                // Handle errors here
            })
    }


}
