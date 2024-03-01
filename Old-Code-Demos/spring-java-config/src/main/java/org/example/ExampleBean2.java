package org.example;

import org.example.components.ComponentBean;

public class ExampleBean2 {
    DependentBean dependentBean;

    public ExampleBean2(DependentBean dependentBean) {
        this.dependentBean = dependentBean;
    }

    public void test() {
        this.dependentBean.test();
    }

    public DependentBean getDependentBean() {
        return dependentBean;
    }

    public void setDependentBean(DependentBean dependentBean) {
        this.dependentBean = dependentBean;
    }
}
